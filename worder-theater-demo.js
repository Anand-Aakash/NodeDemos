const {Worker,isMainThread,parentPort,WorkerData} = require('worker-thread')

if(isMainThread){
    const worker=new Worker
}