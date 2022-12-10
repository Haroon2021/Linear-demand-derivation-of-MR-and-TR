
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const Data = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const DataTransformed = Object.fromEntries(Data);

    // Picking out relavant numbers from the form
    const a = parseFloat(DataTransformed['a']);
    const b = parseFloat(DataTransformed['b']);
    const p = parseFloat(DataTransformed['p']);
    const q = ((a/b) - (p/b))


    document.querySelector(".LinearEquationrearrangement").innerText = `
    Your equation is:
    P = ${a} - ${b}Q
    Solving for Q gives:

    ${b}Q = ${a} - P  
    Q = ${a/b} - P/${b} 
    
    When P = ${p}
    Q = ${a/b} - ${p}/${b}
    Q = ${a/b} - ${p/b}
    Q = ${(a/b) - (p/b)} 

    The derivative is:

    dQ/dP = ${-1/b}
    
    Hence the elasticity is:

    e = (P/Q) *  dQ/dP
    e = ${-1/b}*(P/Q)

    TR = P * Q

    Writing TR in terms of Q we get:
    
    TR = (${a} - ${b}Q) * Q
    TR = ${a}Q - ${b}Q^2

    MR = dTR/dQ = ${a} - 2 * ${b} * Q

    

    `
})