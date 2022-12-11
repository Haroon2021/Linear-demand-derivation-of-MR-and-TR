
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault()
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
    const e = (-1/b) *  (p/q)   


    if (a>0 && b > 0 && p>0 && p <a) {

        document.querySelector(".LinearEquationrearrangement").innerText = `
    Your equation is:
    P = ${a} - ${b}Q
    Solving for Q gives:

    ${b}Q = ${a} - P  
    Q = ${a/b} - P/${b}  (equation 1)
    
    When P = ${p}
    Q = ${a/b} - ${p}/${b}
    Q = ${a/b} - ${p/b}
    Q = ${(a/b) - (p/b)} 

    The derivative of equation 1 is:

    dQ/dP = ${-1/b}
    
    Hence the elasticity is:

    e = (P/Q) *  dQ/dP
    e = ${-1/b}*(P/Q)

    TR = P * Q

    Writing TR in terms of Q we get:
    
    TR = (${a} - ${b}Q) * Q
    TR = ${a}Q - ${b}Q^2

    To Find the mrginal revenue (MR) we differentiate the TR

    MR = dTR/dQ = ${a} - 2 * ${b} * Q

    Given Q = ${q}

    We can find the relevant TR, MR and e which are: 

    TR = ${a}Q - ${b}Q^2
    TR = ${a}*${q} - ${b}*(${q}^2)
    TR = ${a*q} - ${b}*${q*q}
    TR = ${a*q} - ${b*q*q}
    TR = ${(a*q) - (b*q*q)}

    e = ${-1/b}*(P/Q)
    e = ${-1/b}*(${p}/${q})
    e = ${-1/b}*(${p/q}) 
    e = ${(-1/b) *  (p/q)}   

    MR = ${a} - 2 * ${b} * Q
    MR = ${a} - 2 * ${b} * ${q}
    MR = ${a} - 2 * ${b*q}
    MR = ${a} - ${2*b*q}
    MR = ${(a) - (2*b*q)}

    Alternative MR expression:

    MR = P(1+1/e)
    MR = ${p}*(1+1/${e})
    MR = ${p}*(1+${1/e})
    MR = ${p}*(${1+(1/e)})
    MR = ${p*(1+(1/e))}

    `
    } else {
        document.querySelector(".LinearEquationrearrangement").innerText = `
        Please select appropiate values for a, b and p. The following should be true:
        a>0
        b>0
        0<p<${a}
        
        `
    }

    
})