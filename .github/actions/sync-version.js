import fs from 'fs'

// Load the package.json file
let packageJson = fs.readFileSync('package.json');
let packageObj = JSON.parse(packageJson);

let dependencyVersion = packageObj.dependencies['lucide-react-native'];

packageObj.version = dependencyVersion;

fs.writeFileSync('package.json', JSON.stringify(packageObj, null, 2));
