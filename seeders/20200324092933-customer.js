'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert(
			'customers',
			[
				{
					full_name: "johny toe",
          username: "johny",
          email:"johny@mail.com",
          phone_number:"083232324232"
        },
        {
					full_name: "johny toe",
          username: "johny",
          email:"johny@mail.com",
          phone_number:"083232324232"
        },
        {
					full_name: "johny toe",
          username: "johny",
          email:"johny@mail.com",
          phone_number:"083232324232"
        },
        
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
