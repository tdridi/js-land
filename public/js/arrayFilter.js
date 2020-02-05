const namesOfDifferences = [
    'Insertions',
    'Deletion',
    'Change',
    'Case',
    'Bold',
    'Italic',
    'Underline',
    'Hypen',
    'Space',
    'Sub/Superscript',
    'Font Type',
    'Font Size',
    'Min. Font Size ',
    'Color',
  ];
  console.log(namesOfDifferences);
  const typeDifferenceList = [];
  // looping through your array
  for (let i = 0; i < differences.length; i++) {
    const { type } = differences[i];
    const typeExiste = typeDifferenceList.find(typeDifference => typeDifference.type === type);
    if (typeDifferenceList.length > 0 && typeExiste) {
      typeExiste.count++;
    } else {
      typeDifferenceList.push({ type, count: 1 });
    }
  }


  mainContainer.appendChild(demoDiv)
mainContainer.appendChild(demoDiv2)
