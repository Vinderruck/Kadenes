function MaxCalculation() {
    let array = [3, -1, 1, 4, -1];
    let MaxCurrent = array[0];
    let MaxGlobal = array[0];
  
    for (let i = 1; i < array.length; i++) {
      MaxCurrent = Math.max(array[i], MaxCurrent + array[i]);
      MaxGlobal = Math.max(MaxGlobal, MaxCurrent);
    }
  return (MaxGlobal)
    console.log(MaxGlobal);
  }
  
  MaxCalculation();
  
