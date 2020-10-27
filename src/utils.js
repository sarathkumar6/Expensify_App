/**
 * Every file can have 1 default export and several named exports
 */
export default function utillityFunc() {
     console.log('I am utility functions library');
}
// other approach
/**
 * const utilityFunc = () => {console.log('I am utility functions library')}
 * 
 * export {utilityFunc as default}
 */