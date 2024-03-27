const getValue = async () => {
    return 2;
}

const showValue = async ()=>{
    let value = await getValue();
    console.log(value);
}

showValue();