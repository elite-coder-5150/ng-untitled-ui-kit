// Assuming you have Cypress installed and configured in your project

describe('Newsletter CRUD operations', () => {
    it('Creates a new newsletter', () => {
      cy.request('POST', '/api/newsletters', {
        title: 'Test Newsletter',
        content: 'This is a test newsletter.',
      }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('message', 'Newsletter created successfully');
        expect(response.body).to.have.property('newsletterId');
      });
    });
  
    it('Gets all newsletters', () => {
      cy.request('GET', '/api/newsletters').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('Gets a specific newsletter by ID', () => {
      cy.request('GET', '/api/newsletters/1').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
      });
    });
  
    it('Updates a specific newsletter by ID', () => {
      cy.request('PUT', '/api/newsletters/1', {
        title: 'Updated Newsletter',
        content: 'This is an updated newsletter.',
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message', 'newsletter updated successfully');
      });
    });
  
    it('Deletes a specific newsletter by ID', () => {
      cy.request('DELETE', '/api/newsletters/1').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message', 'newsletter deleted successfully');
      });
    });
  });
  