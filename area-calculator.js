function calculatorTriangleArea() {
    // get triangle  base value
    const baseField = document.getElementById('triangle-base');
    const baseValueTextString = baseField.value;
    const base = parseFloat(baseValueTextString);
    console.log(base);

    //get  triangle height value

    const heightField = document.getElementById('triangle-height');
    const heightValueTextString = heightField.value;
    const height = parseFloat(heightValueTextString);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)

    const span = document.getElementById('triangle-area');
    span.innerText = area;

}

function calculatorRectangleArea() {
    
    const rectangleField = document.getElementById('rectangle-width');
    const rectangleFieldValueString = rectangleField.value;
    const width = parseFloat(rectangleFieldValueString);
    console.log(width)



    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValueString = lengthField.value;
    const length = parseFloat(lengthFieldValueString);
    console.log(length)

    const rectangleArea = width * length;
    console.log(rectangleArea);

    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = rectangleArea;
   
}

function calculatorParallelogramArea() {
    
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height);

    const area = base * height;

    setElementInnerText('parallelogram-area', area);

}

function calculatorEllipseArea() {
    
    const majorRadius = getInputValue('ellipse-first-radius');
    console.log(majorRadius);

    const secondRadius = getInputValue('ellipse-second-radius');
    console.log(secondRadius);
    const area = 3.14 * majorRadius * secondRadius;

    setElementInnerText('ellipse-area', area);
}

function getInputValue(id) {
    
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    const Value = parseFloat(inputFieldText);
    return Value;
}

function setElementInnerText(fieldId,value) {
    const element = document.getElementById(fieldId);
    element.innerText = value;

}

