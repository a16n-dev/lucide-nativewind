import fs from 'fs'

// Load the package.json file
let packageJson = fs.readFileSync('package.json');
let packageObj = JSON.parse(packageJson);

// Specify your dependency
let dependency = 'lucide-react-native';

// Get the version of the dependency
let dependencyVersion = packageObj.devDependencies[dependency];

// Update the version of your package
packageObj.version = dependencyVersion;

// also set the lucide version to the same version
packageObj.devDependencies['lucide'] = dependencyVersion;

// Write the updated package.json file back to disk
fs.writeFileSync('package.json', JSON.stringify(packageObj, null, 2));
