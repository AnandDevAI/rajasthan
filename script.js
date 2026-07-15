// Payment Function Alert (Baad mein yahan UPI/Razorpay link jod sakte hain)
function selectPlan(planName) {
    if(planName === 'Pro') {
        alert("Thank you for choosing AnandDevAI Pro! Redirecting to secure payment gateway...");
        // Yahan aap apna Instamojo/Razorpay payment page URL daal sakte hain:
        // window.location.href = "https://razorpay.com/your-payment-link";
    } else {
        alert("You are on the Free Tier. Enjoy building!");
    }
}

// Simple dynamic welcome log in browser console
console.log("AnandDevAI Landing Page Loaded Successfully! Ready for GitHub Pages deployment.");