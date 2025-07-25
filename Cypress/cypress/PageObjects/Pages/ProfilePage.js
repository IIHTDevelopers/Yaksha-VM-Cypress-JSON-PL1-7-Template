class ProfilePage {

  elements = {
    myInfoTab: () => cy.contains('span.oxd-main-menu-item--name', 'My Info'),

    // Test Case 1 & 2 & 3
    qualificationTab: () => cy.contains('a.orangehrm-tabs-item' , 'Qualification'),
    addWorkExp: () => cy.get('button.oxd-button.oxd-button--medium.oxd-button--text').eq(0).contains('Add'),
    companyInput: () =>cy.get('label').contains('Company').parents('.oxd-input-group').find('input'),
    jobTitleInput: () =>cy.get('label').contains('Job Title').parents('.oxd-input-group').find('input'),
    fromDateInput: () =>cy.get('label').contains('From').parents('.oxd-input-group').find('input'),
    toDateInput: () =>cy.get('label').contains('To').parents('.oxd-input-group').find('input'),
    commentTextarea: () =>cy.get('label').contains('Comment').parents('.oxd-input-group').find('textarea'),
    workExpSave: () => cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'),

    // Test Case 2
    editRecordButton: () => cy.get('i.oxd-icon.bi-pencil-fill').eq(0),
    // Test Case 3
    confirmDeleteButton: () => cy.get('button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin').should('be.visible'),
    // Test Case 4
    multipleSelector: () => cy.get('i.oxd-icon.bi-check.oxd-checkbox-input-icon'),
    multipleDeleteButton: () => cy.get('button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-horizontal-margin'),

    // Test Case 5
    addEduButton: () => cy.contains('h6', 'Education').parents('[class*=orangehrm-action-header]').find('button'),
    levelDropdown: () =>
      cy.get('label').contains('Level').parents('.oxd-input-group').find('.oxd-select-wrapper'),
    instituteInput: () =>
      cy.get('label').contains('Institute').parents('.oxd-input-group').find('input'),
    yearInput: () =>
      cy.get('label').contains('Year').parents('.oxd-input-group').find('input'),
    gpaInput: () =>
      cy.get('label').contains('GPA/Score').parents('.oxd-input-group').find('input'),

    // Test Case 6 & 7 
    firstRow: () => cy.get('.orangehrm-container').eq(1).find('.oxd-table-card').eq(0),

    // Test Case 7 & 8
    addLanguageButton: () => cy.contains('h6', 'Languages').parents('[class*=orangehrm-action-header]').find('button'),
    languageDropdown: () => cy.get('label').contains('Language').parents('.oxd-grid-item').find('.oxd-select-text'),
    fluencyDropdown: () => cy.get('label').contains('Fluency').parents('.oxd-grid-item').find('.oxd-select-text'),
    competencyDropdown: () => cy.get('label').contains('Competency').parents('.oxd-grid-item').find('.oxd-select-text'),
    languageComment: () => cy.get('label').contains('Comments').parentsUntil('.oxd-form-row').parent().find('textarea'),

    saveLanguageButton: () => cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'),

    // Test Case 9
    addSkillButton: () => cy.contains('h6', 'Skills').parents('[class*=orangehrm-action-header]').find('button'),
    skillDropdown: () => cy.get('label').contains('Skill').parents('.oxd-input-group').find('.oxd-select-text'),
    skillOption: (skillName) => cy.get('.oxd-select-dropdown').contains(skillName),
    yearsOfExperienceInput: () => cy.get('label').contains('Years of Experience').parents('.oxd-input-group').find('input'),
    skillSaveButton: () => cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'),
   
    // Test Case 10
    firstRowOfSkills: () => cy.get('.orangehrm-container').eq(2).find('.oxd-table-card').eq(0),

  };

  // Test Case 1: Verify New Qualification Could be added to the record of user
  addQualificationRecord(comment) {
    this.elements.myInfoTab().click();
    cy.wait(2000);
    
    this.elements.qualificationTab().click();
    cy.wait(2000);
    
    this.elements.addWorkExp().click();
    cy.wait(2000);
    
    cy.fixture('WorkExpData').then((data) => {

      this.elements.companyInput().type(data.company);
      this.elements.jobTitleInput().type(data.jobTitle);
      this.elements.fromDateInput().type(data.fromDate);
      this.elements.commentTextarea().type(comment);

      this.elements.workExpSave().click();
    });
    cy.wait(500)

  }

  // Test Case 2
  editQualificationRecord(comment) {
    this.elements.myInfoTab().click();
    cy.wait(2000);
    
    this.elements.qualificationTab().click();
    cy.wait(2000);

    // Click Edit Record button
    this.elements.editRecordButton().click();
    // Added Own Comment
    this.elements.commentTextarea().clear().type(comment);


    this.elements.workExpSave().click();
    cy.wait(1000)

  }

  // Test Case 3
  deleteQualificationRecord(comment) {

    this.elements.myInfoTab().click();
    cy.wait(2000);
    // going to Qualification Module
    this.elements.qualificationTab().click();
    cy.wait(2000);
    // First Add User Exp and then delete it
    this.elements.addWorkExp().click();
    cy.wait(2000);
    
    cy.fixture('DeleteWorkExp').then((data) => {
      this.elements.companyInput().type(data.company);
      this.elements.jobTitleInput().type(data.jobTitle);
      this.elements.fromDateInput().type(data.fromDate);
      this.elements.commentTextarea().type(comment);

      this.elements.workExpSave().click();
    });
    cy.wait(1000)

    // Check For new data is added if added then Proceed For Deletation
    cy.contains(comment).should('be.visible');

    // Delete button

    cy.contains('.oxd-table-cell', comment).parents('.oxd-table-row').find('i.oxd-icon.bi-trash').click();

    // this.elements.deleteRecordButton().click();
    this.elements.confirmDeleteButton().click();
    cy.wait(1000);
  }

  // Test Case 4
  deleteMultipleRecords() {
    this.elements.myInfoTab().click();
    cy.wait(1000);
    
    this.elements.qualificationTab().click();
    cy.wait(3000);

    // Selecting First data
    this.elements.multipleSelector().eq(1).click();
    this.elements.multipleSelector().eq(1).click();
    this.elements.multipleSelector().eq(1).click();

    // Delete Button 
    this.elements.multipleDeleteButton().click();
    this.elements.confirmDeleteButton().click();
  }

  // Test Case 5
  addEducationRecord(uniqueGpa , randomYear) {
    this.elements.myInfoTab().click();
    cy.wait(1000);
    
    this.elements.qualificationTab().click();
    cy.wait(2000);

    this.elements.addEduButton().click();

    // Adding Education Record With Unique Year for Verification
    cy.fixture('EduRecordData').then((data) => {

      this.elements.levelDropdown().click();
      cy.get('.oxd-select-dropdown').contains(data.level1).click();

      this.elements.instituteInput().type(data.institute);
      this.elements.yearInput().type(randomYear);
      this.elements.gpaInput().type(uniqueGpa);
      // Save Button
      this.elements.workExpSave().click();
    });
    cy.wait(1000)
  }

  // Test Case 6
  editEducationRecord(uniqueGpa , randomYear) {
    this.elements.myInfoTab().click();
    cy.wait(2000);
    
    this.elements.qualificationTab().click();
    cy.wait(2000);

    // Click Edit Record button
    this.elements.firstRow().find('i.oxd-icon.bi-pencil-fill').click();
    // Added Own Comment
    this.elements.gpaInput().clear().type(uniqueGpa);
    this.elements.yearInput().clear().type(randomYear);


    this.elements.workExpSave().click();
    cy.wait(1000)
  }

  // Test Case 7
  addLanguageRecord(uniqueComment) {
    this.elements.myInfoTab().click();
    cy.wait(1000);
    
    this.elements.qualificationTab().click();
    cy.wait(2000);

    this.elements.addLanguageButton().click();

    // Adding Education Record With Unique Year for Verification

    this.elements.languageDropdown().click();
    cy.get('.oxd-select-dropdown > div').eq(1).click(); 

    // Fluency
    this.elements.fluencyDropdown().click();
    cy.get('.oxd-select-dropdown > div').eq(1).click(); 

    // Competency
    this.elements.competencyDropdown().click();
    cy.get('.oxd-select-dropdown > div').eq(1).click(); 

    // Comments (optional)
    this.elements.languageComment().type(uniqueComment);

  // Save
    this.elements.saveLanguageButton().click();
    cy.wait(1000)

  }

  // Test Case 8
  deleteLanguageRecord(uniqueComment){
    this.elements.myInfoTab().click();
    cy.wait(1000);
    
    this.elements.qualificationTab().click();
    cy.wait(3000);

    this.elements.addLanguageButton().click();

    // Adding Education Record With Unique Year for Verification

    this.elements.languageDropdown().click();
    cy.get('.oxd-select-dropdown > div').eq(1).click(); 

    // Fluency
    this.elements.fluencyDropdown().click();
    cy.get('.oxd-select-dropdown > div').eq(1).click(); 

    // Competency
    this.elements.competencyDropdown().click();
    cy.get('.oxd-select-dropdown > div').eq(1).click(); 

    // Comments (optional)
    this.elements.languageComment().type(uniqueComment);

  // Save
    this.elements.saveLanguageButton().click();
    cy.wait(1000)
    
    cy.contains('.oxd-table-cell', uniqueComment).parents('.oxd-table-row').find('i.oxd-icon.bi-trash').click();

    // this.elements.deleteRecordButton().click();
    this.elements.confirmDeleteButton().click();
    cy.wait(1000);

  }

  // Test Case 9
  addSkillsRecord(randomYear) {
    this.elements.myInfoTab().click();
    cy.wait(2000);
    
    this.elements.qualificationTab().click();
    cy.wait(2000);
    
    this.elements.addSkillButton().click();
    cy.wait(2000);

    this.elements.skillDropdown().click();
    cy.get('.oxd-select-dropdown > div').eq(1).click();
    this.elements.yearsOfExperienceInput().type(randomYear);
 
    // SAve the detail 
    this.elements.skillSaveButton().click();

  }

  // Test Case 10
  editSkillRecord(randomYear) {
    this.elements.myInfoTab().click();
    cy.wait(2000);
    
    this.elements.qualificationTab().click();
    cy.wait(2000);

    // Click Edit Record button
    this.elements.firstRowOfSkills().find('i.oxd-icon.bi-pencil-fill').click();
    // Added Own RandomYear
  
    this.elements.yearsOfExperienceInput().clear().type(randomYear);
    this.elements.skillSaveButton().click();
    cy.wait(1000)
  }
}

export default ProfilePage;
