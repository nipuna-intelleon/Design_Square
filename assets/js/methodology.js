function loadDescription(step) {
    const descriptions = [
        "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle.",
        "We design and create through a lot of sketches and discussions to fine-tune the best outcome for the client.",
        "Once the design is finalized, we focus on building and installing, with the utmost attention to craftsmanship and quality.",
        "Our concern doesn’t end there. We provide post-service support, ensuring our clients’ continued satisfaction."
    ];

    const descriptionDiv = document.getElementById("description");
    const stepElements = [document.getElementById("step1"), document.getElementById("step2"), document.getElementById("step3"), document.getElementById("step4")];
    const verticalLineElements = [document.getElementById("vertical-line1"), document.getElementById("vertical-line2"), document.getElementById("vertical-line3"), document.getElementById("vertical-line4")];

    descriptionDiv.innerHTML = descriptions[step - 1];

    stepElements.forEach((stepElement, index) => {
        if (index + 1 === step) {
            stepElement.classList.add("active-step");
            verticalLineElements[index].classList.add("active-vertical");
        } else {
            stepElement.classList.remove("active-step");
            verticalLineElements[index].classList.remove("active-vertical");
        }
    });
}

loadDescription(1);


function loadDescription(stepNumber) {
    const descriptions = [
        "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client's vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants' lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.\"",
        "We then design. We draw. We map. We sketch. We do a lot of them, guessing what the client would prefer one over the other. After further discussions, we make any alterations, changes, colour grading, and enhancing the design further to fine-tune the best outcome yet to happen.",
        "The magic converted in to reality in this phase. Once the agreeable design is finalized along with other resources, we focus on getting the real work done.In this phase, the excellence of work will be the rule to follow in order to achieve the craftsmanship to the utmost quality and standards. Compromising is out of the context in delivering what we promise. Just-in-Time (JIT) delivery of work will also be one of our biggest considerations at this stage. Our expert team will assist and keep a keen eye until the project is fully completed. We then do the final inspections and go through each and every single detail before the project is handed over to the happy client.",
        "Our concern for our clients' satisfaction is not over yet. We care about the continuing satisfaction of our clients by providing comprehensive support and services even after the successful completion of the project. From enhancements to alterations and modifications, we are happy to continue the delivery of support and services with no delay.We are unique in terms of our tradition of building trusted and long-lasting corporate relationships with our clients."
    ];

    document.getElementById('description').innerText = descriptions[stepNumber - 1];

    // Get the position of the clicked step
    const stepElement = document.getElementById('step' + stepNumber);
    const stepPosition = stepElement.getBoundingClientRect();

    // Move the square connector
    const square = document.getElementById('connector-square');
    square.style.left = `${stepPosition.left + stepElement.offsetWidth / 4 - square.offsetWidth / 4}px`;

    // Update the active state for the square
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active-step'));
    stepElement.classList.add('active-step');
}
