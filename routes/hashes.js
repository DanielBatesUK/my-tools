// ################################################################################################

// Imports
import crypto from 'crypto';

// ################################################################################################

function getMD5(string) {
  const results = crypto.createHash('md5').update(string).digest('hex');
  console.info(`getMD5 - MD5 hash created '${results}' from string '${string}'`);
  return results;
}

function alternateCase(string) {
  let results = '';
  let capsCounter = 0;
  for (let i = 0; i < string.length; i += 1) {
    const char = string.substring(i, (i + 1));
    if ((/[a-zA-Z]/).test(char) === true) {
      // Is letter: so set case
      results += ((capsCounter % 2 === 0) ? char.toLowerCase() : char.toUpperCase());
      capsCounter += 1;
    } else {
      // Is not a letter: add to results
      results += char;
    }
  }
  return results;
}

function lowerUpperNumbers(string) {
  const hasLower = (/[a-z]/).test(string);
  const hasUpper = (/[A-Z]/).test(string);
  const hasNumbers = (/[0-9]/).test(string);
  let results = string;

  // Check string
  if (!!hasLower && !!hasUpper && !!hasNumbers) {
    // String has both letters and numbers (do nothing)
    console.info(`fixString - String okay: ${string}`);
    return string;
  }

  // Check for no lowercase letters
  if (!hasLower) {
    console.info(`fixString - String has no lowercase letters: ${results}`);
    // No lowercase letters found - change last character
    if ((/[a-zA-Z]/).test(results.substring(results.length - 1, results.length))) {
      // Last character is a letter - change to lowercase
      console.info(`fixString - last character is a letter '${results.substring(results.length - 1, results.length)}' change to lowercase: ${results}`);
      results = results.substring(0, results.length - 1) + results.substring(results.length - 1, results.length).toLowerCase();
    } else {
      // Last character is a number - create lowercase from number
      let lastNumber = Number(results.substring(results.length - 1, results.length));
      if (lastNumber > 5) lastNumber = Math.round(lastNumber / 2);
      console.info(`fixString - Last character is a number '${results.substring(results.length - 1, results.length)}' change to lowercase character-code '${lastNumber + 65 + 32}' (${String.fromCharCode(lastNumber + 65 + 32)}): ${string}`);
      results = results.substring(0, results.length - 1) + String.fromCharCode(lastNumber + 65 + 32);
    }
    // Check string again
    console.info(`fixString - Replaced last character with lowercase letter: ${results}`);
    results = lowerUpperNumbers(results);
  }

  // Check for no uppercase letters
  if (!hasUpper) {
    console.info(`fixString - String has no uppercase letters: ${results}`);
    // No uppercase letters found - change first character
    if ((/[a-zA-Z]/).test(results.substring(0, 1))) {
      // First character is a letter - change to uppercase
      console.info(`fixString - First character is a letter '${results.substring(0, 1)}' change to uppercase: ${results}`);
      results = results.substring(0, 1).toUpperCase() + results.substring(1, results.length);
    } else {
      // First character is a number - create uppercase from number
      let firstNumber = Number(results.substring(0, 1));
      if (firstNumber > 5) firstNumber /= 2;
      console.info(`fixString - First character is a number '${results.substring(0, 1)}' change to uppercase character-code '${firstNumber + 65}' (${String.fromCharCode(firstNumber + 65)}): ${results}`);
      results = String.fromCharCode(firstNumber + 65).toUpperCase() + results.substring(1, results.length);
    }
    console.info(`fixString - Replaced first character with uppercase letter: ${results}`);
    // Check string again
    results = lowerUpperNumbers(results);
  }

  // Check for no numbers
  if (!hasNumbers) {
    console.info(`fixString - String has no numbers: ${results}`);
    // No numbers found - change second character
    console.info(`fixString - Second character (${results.substring(1, 2)}) is character-code '${results.charCodeAt(1)}' change letter to number '${(results.charCodeAt(1) - 65)}': ${results}`);
    results = results.substring(0, 1) + (results.charCodeAt(1) - 65) + results.substring(2, results.length);
    console.info(`fixString - Replaced second character with number: ${results}`);
    // Check string again
    results = lowerUpperNumbers(results);
  }

  // Finished
  return results;
}

function addSymbols(string) {
  // Array of text symbols used
  const symbolsArray = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  // Get first number in the string
  let firstNumber = Number(string[string.search(/[0-9]/)]);
  console.info(`addSymbols - First number in string is '${firstNumber}': ${string}`);

  // Divide string into 4 parts
  const stringArray = string.match(new RegExp(`.{1,${string.length / 4}}`, 'g'));
  console.info(`addSymbols - Split string into 4 parts '${stringArray.toString()}': ${string}`);

  // Replace first character in each part with symbol
  let results = '';
  for (let i = 0; i < stringArray.length; i += 1) {
    results = results + stringArray[i].substring(0, stringArray[i].length - 1) + symbolsArray[(((firstNumber += 1) * (i + 1)) % symbolsArray.length)];
    console.info(`addSymbols - Replaced last character with symbol '${symbolsArray[((firstNumber * (i + 1)) % symbolsArray.length)]}' on string part #${i + 1} '${stringArray[i]}': ${string}`);
  }
  // Finished
  return results;
}

function getHash(string, outputLength = 32, forceAlternateCase = true, forceLowerUpperNumbers = true, forceSymbols = true) {
  // Cut size of string
  let results = String(getMD5(string)).substring(0, outputLength);
  // Force alternating case
  if (forceAlternateCase) results = alternateCase(results);
  // Force Lower, Upper & numbers
  if (forceLowerUpperNumbers) results = lowerUpperNumbers(results);
  // Force symbols
  if (forceSymbols) results = (results.length > 7 ? addSymbols(results) : '{ error: string length must >= 8 }');

  // Finished
  return results;
}

function hashTableData(inputString) {
  const currentDate = new Date();
  const results = {};
  let ojectMonthName = '';
  for (let i = -6; i < 6; i += 1) {
    if (Math.sign(i) === -1) ojectMonthName = `n${Math.abs(i)}_month`;
    if (Math.sign(i) === 0) ojectMonthName = 'current_month';
    if (Math.sign(i) === 1) ojectMonthName = `p${i}_month`;
    const tempDate = new Date(currentDate.getTime());
    tempDate.setMonth(tempDate.getMonth() + i);
    const tempString = String(inputString + tempDate.toLocaleString('default', { month: 'long' }) + String(tempDate.getFullYear()));
    results[ojectMonthName] = {
      heading: String(tempDate.getFullYear()).substring(2, 4) + String(tempDate.getMonth() + 1).padStart(2, '0'),
      hash_8: getHash(tempString, 8, true, true, true),
      hash_16: getHash(tempString, 16, true, true, true),
      hash_32: getHash(tempString, 32, true, true, true),
    };
  }
  // Finished
  return results;
}

function spanTitles(string) {
  let results = '';
  for (let i = 0; i < string.length; i += 1) {
    results = `${results}<span title='${(i + 1)}'>${string[i]}</span>`;
  }
  // Finished
  return results;
}

// ################################################################################################

// Route - Hashes
function routeIndex(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'hashes'`);
    const inputString = String((req.body.inputString ? req.body.inputString : '')).toLowerCase();
    const pageOptions = {
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
    };
    // Span Titles
    Object.keys(pageOptions).forEach((key) => { pageOptions[`span_title_${key}`] = spanTitles(pageOptions[key]); });
    res.render('hashes', pageOptions);
    res.end();
  } catch (error) {
    console.error(error);
    res.send('Hashes error');
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeIndex;
