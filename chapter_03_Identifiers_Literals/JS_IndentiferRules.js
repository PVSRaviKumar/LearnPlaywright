// ============================================
// JAVASCRIPT IDENTIFIER RULES - ALL EXAMPLES
// ============================================

// RULE 1: Must start with letter, underscore (_), or dollar sign ($)
var myVariable = 10;        // ✓ Valid - starts with letter
var _privateVar = 20;       // ✓ Valid - starts with underscore
var $jqueryVar = 30;        // ✓ Valid - starts with dollar sign
// var 123abc = 40;         // ✗ Invalid - starts with digit

// RULE 2: Can contain letters, digits, underscores, or dollar signs
var myVar123 = 50;          // ✓ Valid - contains letters and digits
var _my_var = 60;           // ✓ Valid - contains underscores
var my$var = 70;            // ✓ Valid - contains dollar sign
var my_var_123 = 80;        // ✓ Valid - mixed valid characters

// RULE 3: Cannot start with a digit
var abc123 = 90;            // ✓ Valid
var _123abc = 100;          // ✓ Valid - underscore at start
// var 123abc = 110;        // ✗ Invalid - digit at start

// RULE 4: Cannot be a reserved keyword
var name = "Ravi";          // ✓ Valid - not a reserved word
var age = 25;               // ✓ Valid - not a reserved word
// var class = "student";   // ✗ Invalid - 'class' is reserved
// var function = "test";   // ✗ Invalid - 'function' is reserved
// var return = 5;          // ✗ Invalid - 'return' is reserved

// RULE 5: Case-sensitive (different cases = different identifiers)
var Name = "Ravi";          // ✓ Different from 'name'
var name = "Kumar";         // ✓ Different from 'Name'
console.log(Name);          // Output: Ravi
console.log(name);          // Output: Kumar

// RULE 6: Cannot contain spaces
var ravikumar = 99;         // ✓ Valid - no spaces
var ravi_kumar = 100;       // ✓ Valid - underscore instead of space
// var ravi kumar = 50;     // ✗ Invalid - contains space

// RULE 7: Cannot contain special characters (except $ and _)
var myVar = 110;            // ✓ Valid
var my_var = 120;           // ✓ Valid - underscore allowed
var my$var = 130;           // ✓ Valid - dollar sign allowed
// var my-var = 140;        // ✗ Invalid - hyphen not allowed
// var my@var = 150;        // ✗ Invalid - @ not allowed
// var my#var = 160;        // ✗ Invalid - # not allowed

// RULE 8: Naming Conventions
var camelCaseVariable = "good";           // ✓ camelCase - recommended for variables
var snake_case_variable = "okay";         // ✓ snake_case - also acceptable
var PascalCaseClass = "Class";            // ✓ PascalCase - recommended for classes
var CONSTANT_VALUE = 999;                 // ✓ UPPER_SNAKE_CASE - recommended for constants

// SUMMARY OF VALID IDENTIFIERS
var $ = 10;
var _privateVar = 30;
var publicVar345 = 89;
var myName = "Ravi";
var myAge = "Kumar";
var my_var_name = 90;
var my$var = 99;

// SUMMARY OF INVALID IDENTIFIERS (commented out)
// var 234abc = 89;                     // Cannot start with digit
// var my-var = 50;                     // Cannot contain hyphen
// var my var = 60;                     // Cannot contain space
// var my@var = 70;                     // Cannot contain @
// var my#var = 80;                     // Cannot contain #
// var class = "test";                  // Cannot use reserved keyword
// var function = "test";               // Cannot use reserved keyword