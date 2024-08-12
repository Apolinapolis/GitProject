function groupAndSortStudents(students) {
    // ваш код здесь
  }
  
  const students = [
    { name: 'Alice', course: 'Math', grade: 90 },
    { name: 'Bob', course: 'Math', grade: 85 },
    { name: 'Charlie', course: 'Physics', grade: 95 },
    { name: 'David', course: 'Physics', grade: 92 },
    { name: 'Eve', course: 'Math', grade: 88 }
  ];
  
  console.log(groupAndSortStudents(students));
  // {
  //   Math: [
  //     { name: 'Alice', grade: 90 },
  //     { name: 'Eve', grade: 88 },
  //     { name: 'Bob', grade: 85 }
  //   ],
  //   Physics: [
  //     { name: 'Charlie', grade: 95 },
  //     { name: 'David', grade: 92 }
  //   ]
  // }
  