import React from "react"

export const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "How do you make your dougnuts?",
            answer: "With lots of love, and a little bit of crazy"
        },
        {
            id: 2,
            question: "",
            answer: ""
        },
        {
            id: 3,
            question: "",
            answer: ""
        }
    ]
    return (
        <>
            <h1>Frequently Asked Questions</h1>
            <ul>
                {faqs.map(faq => <ul key={faq.id}>
                    <h2>{faq.question}</h2>
                    <h3>{faq.answer}</h3>
                </ul>)}
            </ul>
        </>
    )
}