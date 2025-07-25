import LoginPage from '../PageObjects/Pages/LoginProfilePage';
import ProfilePage from '../PageObjects/Pages/ProfilePage';


describe('Automation Suite for Yaksha Application', () => {
  const loginPage = new LoginPage();
  const profilePage = new ProfilePage();


  beforeEach(() => {
    // Visit the Login Page before each test
    loginPage.performLogin(); 

  });

  // Test Case 1
  it('Test Case-1: Verify New Qualification Could be added to the record of user', () => {
    // Added Comment for Assertion
    const comment = "Comment_&" + Date.now();
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.addQualificationRecord(comment);
      })
      .then(() => {
        verifyWorkExpAdded(comment); // Verify Work Exp Added Or Not
      });
  });

  // Test Case 2
  it('Test Case-2: Verify New Qualification Could be Edited from the the record of user', () => {
    // Added Comment for Assertion
    const comment = "Comment_&" + Date.now();
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.editQualificationRecord(comment);
      })
      .then(() => {
        verifyWorkExpEdited(comment); // Verify Work Exp Edited or Not
      });
  });

  // Test Case 3
  it('Test Case-3: Verify the qualification could be deleted', () => {
    // Start
    // Added Comment for Assertion
    const comment = "Comment_&" + Date.now();
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.deleteQualificationRecord(comment);
      })
      .then(() => {
        verifyWorkExpDelete(comment); // Verify Work Exp Delete Successfully
      });
  });

  // Test Case 4
  it('Test Case-4: Verify the qualifications select delete functionality', () => {
    // Start
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.deleteMultipleRecords();
      })
      .then(() => {
        verifyMultipleWorkExpDelete(); // Verify Multiple work Exp Delete at one
      });
  });
  
  it('Test Case-5: Verify New Qualification added could be edited from the record of user', () => {
    // Start
    // Added Unique Gpa for Assertion
    const uniqueGpa = "gpa_&" + Date.now();
    // Generatin Random Year Between 1980 to 2025
    const randomYear = Math.floor(Math.random() * (2025 - 1980 + 1)) + 1980;
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.addEducationRecord(uniqueGpa , randomYear);
      })
      .then(() => {
        verifyEduRecordAdded(uniqueGpa); // Verify Education Added Or Not
      });
  });


  // Test Case 6
  it('Test Case-6: Verify New Education added could be edited from the record of user', () => {
    // Start
    // Added Unique Gpa for Assertion
    const uniqueGpa = "gpa_&" + Date.now();
    // Generatin Random Year Between 1980 to 2025
    const randomYear = Math.floor(Math.random() * (2025 - 1980 + 1)) + 1980;
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.editEducationRecord(uniqueGpa , randomYear);
      })
      .then(() => {
        verifyEduRecordEdit(uniqueGpa); // Verify Education Added Or Not
      });
  });

  // Test Case 7
  it('Test Case-7:Verify New Language added could be added to the record of user', () => {
    // Start
    // Added Unique Comment for Assertion
    const uniqueComment = "LangComment_&" + Date.now();
    // ------------
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.addLanguageRecord(uniqueComment);
      })
      .then(() => {
        verifyAddLanguageRecord(uniqueComment); // Verify Language Added
      });
  });

  // Test Case 8
  it('Test Case-8 : Verify New Language added could be Deleted from the record of user', () => {
    // Start
    // Added Unique Comment for Assertion
    const uniqueComment = "LangComment_&" + Date.now();
    // ------------
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.deleteLanguageRecord(uniqueComment);
      })
      .then(() => {
        verifyLanguageRecordDelete(uniqueComment); // Verify Language Record Deleted
      });
  });


  // Test Case 9
  it('Test Case-9: Verify the "Skills" could be added to the record ', () => {
    // Start
    const randomYear = Math.floor(Math.random() * (99 - 55 + 1)) + 55;

    /* This Test Case will fails when there is no skill availble in the site where we have to select Skills
    Sometimes there are no data then this will fails it require atleast On skill to be Availble in Dropdown */
    cy.wrap(null).then(() => {
      // Navigate to Profile Page & Performing Actions
      profilePage.addSkillsRecord(randomYear);

    }).then(() => {
      cy.wait(2000);
      verifyNewSkillAdded(randomYear);
      });

    });


  // Test Case 10
  it('Test Case-10: Verify the "Skills" could be edited from the record' , () => {
    // Start
    const randomYear = Math.floor(Math.random() * (100 - 55 + 1)) + 55;
    /* This Test Case will fails when there is no skill availble in the site where we have to select Skills
    Sometimes there are no data then this will fails it require atleast On skill to be Availble in Dropdown */
    cy.wrap(null)
      .then(() => {
        // Navigate to Profile Page & Performing Actions
        profilePage.editSkillRecord(randomYear);
      })
      .then(() => {
        verifySkillRecordEdit(randomYear); // Verify Skill Edited Or Not
      });
  });



  // ---------------------- Helper Functions ----------------------

});




// Helper function moved outside the describe block
// Test Case 1: Verify New Qualification Could be added to the record of user
function verifyWorkExpAdded(comment) {
  cy.contains(comment).should('be.visible');
};

// Test Case 2: Verify work Experiance ade
function verifyWorkExpEdited(comment) {
  cy.contains(comment).should('be.visible');
};

// Test Case 3: Verify  Work Experiance Added
function verifyWorkExpDelete(comment) {
  cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Deleted');
  cy.contains(comment).should('not.exist');
}


// Test Case 4: Verify Multiple Record Delete
function verifyMultipleWorkExpDelete() {
  cy.wait(2000);
  cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Deleted');
  cy.log('Record Deleted successfully');
}

// Test Case 5: Verify Education Added
function verifyEduRecordAdded(uniqueGpa) {
  cy.contains(uniqueGpa).should('be.visible');
}

// Test Case 6 : Verify Education Edited
function verifyEduRecordEdit(uniqueGpa) {
  cy.contains(uniqueGpa).should('be.visible');
}


// Test Case 7: Verify User Edit Form Appears
function verifyAddLanguageRecord(uniqueComment) {
  // cy.wait(2000);
  cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Saved');
  cy.contains(uniqueComment).should('be.visible');
}

// Test Case 8: Verify Admin Table Sorting
function verifyLanguageRecordDelete(uniqueComment) {
  cy.wait(2000);
  cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Deleted');
  cy.contains(uniqueComment).should('not.exist');

}

function verifyNewSkillAdded(randomYear) {
    cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Saved');
    cy.contains(randomYear).should('be.visible');
  }

 // Test Case 10
function verifySkillRecordEdit(randomYear) {
  cy.wait(1000);
  cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Updated');
  cy.contains(randomYear).should('be.visible');

}

