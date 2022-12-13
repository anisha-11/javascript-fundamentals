const Cohort = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
};

const cohort = { 
  name: 'November', 
  id: 123456,
  students: ['Anisha', 'Shah', 'Thomas']
};


Cohort(cohort);