import "./contact.css"



const socialMedia = [
    {
        id:1,
        label:"Gmail",
        image:"https://res.cloudinary.com/duaoa6n1z/image/upload/v1783548778/myportfolio/techStack/gmail_v7bs9q.png",
        url:"/sendmail"
    },
    {
        id:2,
        label:"LinkedIn",
        image:"https://res.cloudinary.com/duaoa6n1z/image/upload/v1783548792/myportfolio/techStack/linkedin_bj2zxj.png",
        url:"https://www.linkedin.com/in/leslie-garcia-garcia/"
    },
    {
        id:3,
        label:"Github",
        image:"https://res.cloudinary.com/duaoa6n1z/image/upload/v1783460360/myportfolio/techStack/github_om4chd.png",
        url:"https://github.com/lesgargar"
    },
    {
        id:4,
        label:"WhatsApp",
        image:"https://res.cloudinary.com/duaoa6n1z/image/upload/v1783548793/myportfolio/techStack/whatsapp_px5hcd.avif",
        url:"https://wa.me/525547867015" 
    },

]

export default function Contact(){

    return(
        <section id="contact" className="container">
            <div className="contact">
                <h2 className="title">Contact</h2>

                <div className="contact-content" >
                    <h4>Do you have a project in mind?</h4>
                    <p>Don't hesitate to contact me, let's work together!</p>
                    <div className="contact-links">
                    {socialMedia.map((item)=>(
                        <a className="link" href={item.url} target="_blank" rel="noopener noreferrer">
                            <img className="link-img" src={item.image} alt={item.label}/>
                            <p>{item.label}</p>
                        </a>
                    ))}
                    </div>
                </div>

            </div>
       
        </section>
    )
}


/*
                    {socialMedia.map((item)=>(
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img  src={item.image} alt={item.label}/>
                        </a>
                    ))}

*/