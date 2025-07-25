class ProfilePage {

  elements = {
    myInfoTab: () => cy.contains('', ''),

    // Test Case 1 & 2 & 3
    qualificationTab: () => cy.contains('' , ''),
    addWorkExp: () => cy.get('').eq(0).contains(''),
    companyInput: () =>cy.get('').contains('').parents('').find(''),
    jobTitleInput: () =>cy.get('').contains('').parents('').find(''),
    fromDateInput: () =>cy.get('').contains('').parents('').find(''),
    toDateInput: () =>cy.get('').contains('').parents('').find(''),
    commentTextarea: () =>cy.get('').contains('').parents('').find(''),
    workExpSave: () => cy.get(''),

    // Test Case 2
    editRecordButton: () => cy.get('').eq(0),
    // Test Case 3
    confirmDeleteButton: () => cy.get('').should(''),
    // Test Case 4
    multipleSelector: () => cy.get(''),
    multipleDeleteButton: () => cy.get(''),

    // Test Case 5
    addEduButton: () => cy.contains('', '').parents('').find(''),
    levelDropdown: () =>
      cy.get('').contains('').parents('').find(''),
    instituteInput: () =>
      cy.get('').contains('').parents('').find(''),
    yearInput: () =>
      cy.get('').contains('').parents('').find(''),
    gpaInput: () =>
      cy.get('').contains('').parents('').find(''),

    // Test Case 6 & 7 
    firstRow: () => cy.get('').eq(1).find('').eq(0),

    // Test Case 7 & 8
    addLanguageButton: () => cy.contains('', '').parents('').find(''),
    languageDropdown: () => cy.get('').contains('').parents('').find(''),
    fluencyDropdown: () => cy.get('').contains('').parents('').find(''),
    competencyDropdown: () => cy.get('').contains('').parents('').find(''),
    languageComment: () => cy.get('').contains('').parentsUntil('').parent().find(''),

    saveLanguageButton: () => cy.get(''),

    // Test Case 9
    addSkillButton: () => cy.contains('', '').parents('').find(''),
    skillDropdown: () => cy.get('').contains('').parents('').find(''),
    skillOption: (skillName) => cy.get('').contains(skillName),
    yearsOfExperienceInput: () => cy.get('').contains('').parents('').find(''),
    skillSaveButton: () => cy.get(''),
   
    // Test Case 10
    firstRowOfSkills: () => cy.get('').eq(2).find('').eq(0),

  };

  // Test Case 1: Verify New Qualification Could be added to the record of user
  addQualificationRecord(comment) {
  }

  // Test Case 2
  editQualificationRecord(comment) {
  }

  // Test Case 3
  deleteQualificationRecord(comment) {
  }

  // Test Case 4
  deleteMultipleRecords() {
  }

  // Test Case 5
  addEducationRecord(uniqueGpa , randomYear) {
  }

  // Test Case 6
  editEducationRecord(uniqueGpa , randomYear) {
  }

  // Test Case 7
  addLanguageRecord(uniqueComment) {
  }

  // Test Case 8
  deleteLanguageRecord(uniqueComment){
  }

  // Test Case 9
  addSkillsRecord(randomYear) {
  }

  // Test Case 10
  editSkillRecord(randomYear) {
  }
}

export default ProfilePage;
