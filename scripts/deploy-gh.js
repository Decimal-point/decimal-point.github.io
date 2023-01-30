const shell = require('shelljs')

shell.cd('docs/.vuepress/dist',(code,stdout,stderr)=>{
    console.log(code,stdout,stderr);
})
shell.exec('git init')
shell.exec('git add -A')
shell.exec('git commit -m "update"')
shell.exec('git push -f https://github.com/Decimal-point/decimal-point.github.io.git master')
shell.cd('..',function(code,stdout,stderr){
    if(code === 0) {
        console.log("upload git success!!!");
    }
})