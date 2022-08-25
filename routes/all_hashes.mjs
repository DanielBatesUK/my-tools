// ################################################################################################

// My Imports
import timeStamp from '../lib/time_stamp.mjs';
import crypto from 'crypto';

// ################################################################################################

function getMD5(string) {
  const results = crypto.createHash('md5').update(string).digest("hex")
  console.info(`${timeStamp()} - getMD5 - MD5 hash created '${results}' from string '${string}'`);
  return results
}

function isLetter(char) {
  return (/[a-zA-Z]/).test(char)
}

function isNumber(char) {
  return (/[0-9]/).test(char)
}

function alternateCase(string) {
  let results = '';
  let capsCounter = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string.substring(i, ( i + 1))
    if ((/[a-zA-Z]/).test(char) === true) {
      // Is letter: so set case
      results = results + ((capsCounter % 2 === 0) ? char.toLowerCase() : char.toUpperCase());
      capsCounter++;
    } else {
      // Is not a letter: add to results
      results = results + char;
    }
  }
  return results
}

function lowerUpperNumbers(string) {
  const hasLower = (/[a-z]/).test(string);
  const hasUpper = (/[A-Z]/).test(string);
  const hasNumbers = (/[0-9]/).test(string);
  if (!!hasLower && !!hasUpper && !!hasNumbers) {
    // String has both letters and numbers (do nothing)
    console.info(`${timeStamp()} - fixString - String okay: ${string}`)
    return string
  }

  // Check for no lowercase letters
  if(!hasLower) {
    console.info(`${timeStamp()} - fixString - String has no lowercase letters: ${string}`)
    // No lowercase letters found - change last character
    if(isLetter(string.substring(string.length - 1, string.length))) {
      // Last character is a letter - change to lowercase
      console.info(`${timeStamp()} - fixString - last character is a letter '${string.substring(string.length - 1, string.length)}' change to lowercase: ${string}`)
      string = string.substring(0, string.length - 1) + string.substring(string.length - 1, string.length).toLowerCase();
    } else {
      // Last character is a number - create lowercase from number
      let lastNumber = Number(string.substring(string.length - 1, string.length));
      if(lastNumber > 5) lastNumber = Math.round(lastNumber / 2);
      console.info(`${timeStamp()} - fixString - Last character is a number '${string.substring(string.length - 1, string.length)}' change to lowercase character-code '${lastNumber + 65 + 32}' (${String.fromCharCode(lastNumber + 65 + 32)}): ${string}`)
      string = string.substring(0, string.length - 1) + String.fromCharCode(lastNumber + 65 + 32);
    }
    // Check string again
    console.info(`${timeStamp()} - fixString - Replaced last character with lowercase letter: ${string}`)
    string = lowerUpperNumbers(string);
  }

  // Check for no uppercase letters
  if(!hasUpper) {
    console.info(`${timeStamp()} - fixString - String has no uppercase letters: ${string}`)
    // No uppercase letters found - change first character
    if(isLetter(string.substring(0, 1))) {
      // First character is a letter - change to uppercase
      console.info(`${timeStamp()} - fixString - First character is a letter '${string.substring(0, 1)}' change to uppercase: ${string}`)
      string = string.substring(0, 1).toUpperCase() + string.substring(1, string.length);
    } else {
      // First character is a number - create uppercase from number
      let firstNumber = Number(string.substring(0, 1));
      if(firstNumber > 5) firstNumber = firstNumber / 2;
      console.info(`${timeStamp()} - fixString - First character is a number '${string.substring(0, 1)}' change to uppercase character-code '${firstNumber + 65}' (${String.fromCharCode(firstNumber + 65)}): ${string}`)
      string = String.fromCharCode(firstNumber + 65).toUpperCase() + string.substring(1, string.length);
    }
    console.info(`${timeStamp()} - fixString - Replaced first character with uppercase letter: ${string}`)
    // Check string again
    string = lowerUpperNumbers(string);
  }

  //Check for no numbers
 if(!hasNumbers) {
    console.info(`${timeStamp()} - fixString - String has no numbers: ${string}`)
    // No numbers found - change second character
    console.info(`${timeStamp()} - fixString - Second character (${string.substring(1, 2)}) is character-code '${string.charCodeAt(1)}' change letter to number '${(string.charCodeAt(1) - 65)}': ${string}`)
    string = string.substring(0, 1) + (string.charCodeAt(1) - 65) + string.substring(2, string.length);
    console.info(`${timeStamp()} - fixString - Replaced second character with number: ${string}`)
    // Check string again
    string = lowerUpperNumbers(string);
  }

  // Finished
  return string
}

function addSymbols(string) {
  // Array of text symbols used  
  const symbolsArray = new Array('!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~');

  // Get first number in the string
  let firstNumber = Number(string[string.search(/[0-9]/)]);
  console.info(`${timeStamp()} - addSymbols - First number in string is '${firstNumber}': ${string}`)

  // Divide string into 4 parts
  const stringArray = string.match(new RegExp('.{1,' + (string.length / 4) + '}', 'g'))
  console.info(`${timeStamp()} - addSymbols - Split string into 4 parts '${stringArray.toString()}': ${string}`)

  // Replace first character in each part with symbol
  let results = '';
  for (let i = 0; i < stringArray.length; i++) {
    results = results + stringArray[i].substring(0, stringArray[i].length - 1) + symbolsArray[((++firstNumber*(i+1)) % symbolsArray.length)]
    console.info(`${timeStamp()} - addSymbols - Replaced last character with symbol '${symbolsArray[((firstNumber*(i+1)) % symbolsArray.length)]}' on string part #${i+1} '${stringArray[i]}': ${string}`);
  }
  // Finished
  return results
}

function hashTableData (inputString) {
  const currentDate = new Date();
  const results = {};
  let ojectMonthName = '';
  for(let i = -6; i < 6; i++) {
    if(Math.sign(i) === -1) ojectMonthName = `n${Math.abs(i)}_month`;
    if(Math.sign(i) === 0) ojectMonthName = 'current_month';
    if(Math.sign(i) === 1) ojectMonthName = `p${i}_month`;
    const tempDate = new Date(currentDate.getTime());
    tempDate.setMonth(tempDate.getMonth() + i);
    const tempString = String(inputString + tempDate.toLocaleString('default', { month: 'long' }) + String(tempDate.getFullYear()));
    results[ojectMonthName] = {
      heading: String(tempDate.getFullYear()).substring(2,4) + String(tempDate.getMonth() + 1).padStart(2, '0'),
      hash_8: getHash(tempString, 8, true, true, true),
      hash_16: getHash(tempString, 16, true, true, true),
      hash_32: getHash(tempString, 32, true, true, true),
    }
  }
  // Finished
  return results
}

function getHash(string, outputLength = 32, forceAlternateCase = true, forceLowerUpperNumbers = true, forceSymbols = true) {
  //Cut size of string
  string = String(getMD5(string)).substring(0,outputLength);
  // Force alternating case
  if(forceAlternateCase) string = alternateCase(string);
  // Force Lower, Upper & numbers
  if(forceLowerUpperNumbers) string = lowerUpperNumbers(string);
  // Force symbols
  if(forceSymbols) string = (string.length > 7 ? addSymbols(string) : '{ error: string length must >= 8 }');

  //Finished
  return string
}

function spanTitles (string) {
  let results = '';
  for(let i = 0; i < string.length; i++) {
    results = `${results}<span title='${(i+1)}'>${string[i]}</span>`;
  }
  //Finished
  return results
}

// ################################################################################################

// Route - Hashes
function routeIndex(req, res) {
  try {
    console.log(`${timeStamp()} - Processing HTTP ${req.method} request for '${req.path}' as 'hashes'`);
    const inputString = String((!!req.body.inputString ? req.body.inputString : '')).toLowerCase();
    const page_options = {
      page_heading: 'Hashes',
      page_content: 'Hashes stuff goes here',
      input_string: inputString,
      full_md5: getHash(inputString, 32, false, false, false),
      alt_6: getHash(inputString, 6, true, true, false),
      alt_8: getHash(inputString, 8, true, true, false),
      alt_10: getHash(inputString, 10, true, true, false),
      alt_12: getHash(inputString, 12, true, true, false),
      alt_16: getHash(inputString, 16, true, true, false),
      alt_sym_16: getHash(inputString, 16, true, true, true),
      alt_sym_32: getHash(inputString, 32, true, true, true),
      hash_table: hashTableData(inputString),
    }
    //Span Titles
    for (const [key, value] of Object.entries(page_options)) {
      page_options[`span_title_${key}`] = spanTitles(value);
    }
    res.render(process.env.VIEW_HASHES, page_options);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(`${timeStamp()} - Hashes error`);
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeIndex;
