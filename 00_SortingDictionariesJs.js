/**
 * Created by el on 1.10.2016 г..
 */
function example(input) {
    let systems = new Map();
    for (var i = 0; i < input.length; i++) {
        let [systemName,componentName,subComponentName]=input[i].split(/\s*\|\s*/);
        if(!systems.has(systemName)){
            systems.set(systemName,new  Map());
            systems.get(systemName).set(componentName,[]);
            systems.get(systemName).get(componentName).push(subComponentName)
        }else{
            if(!systems.get(systemName).has(componentName)){
                systems.get(systemName).set(componentName,[]);
                systems.get(systemName).get(componentName).push(subComponentName)
            }else
                systems.get(systemName).get(componentName).push(subComponentName)
        }
    }
    console.log(systems)

    let systemArr=[...systems].sort((a,b)=>compare(a,b,systems));
    function compare(a,b,sys) {
        let result= sys.get(a[0]).size-sys.get(b[0]).size;
        if(result===0)
            return a[0].toLocaleLowerCase().localeCompare(b[0].toLowerCase());
        if(result>0)
            return -1;
        else
            return 1;
    }

    for (let [key,value] of systemArr){
        console.log(key);
        let sortedComps =[...systems.get(key)].sort((l1,l2)=>systems.get(key).get(l2[0]).length-systems.get(key).get(l1[0]).length);
        for(let [comp,subComp]of sortedComps){
            console.log("|||"+comp);
            for(let element of subComp){
                console.log("||||||"+element)
            }
        }
    }

}
example([
   'SULS | Main Site | Home Page',
   'SULS | Main Site | Login Page',
   'SULS | Main Site | Register Page',
   'SULS | Judge Site | Login Page',
   'SULS | Judge Site | Submittion Page',
   'Lambda | CoreA | A25',
   'SULS | Digital Site | Login Page',
   'Lambda | CoreB | B24',
   'Lambda | CoreB | A24',
   'Lambda | CoreB | A23',
   'Lambda | CoreC | C4',
   'Indice | Session | Default Storage',
   'Indice | Session | Default Security',
]);