import '../Style/footer.css'

const Footer=()=>
{
    let icon=[
        {icons: '/facebook.png'},
        {icons:'/insta.png' },
        {icons:'/twitter.png' },
        {icons:'/you.png' },
        {icons:'/pinterest.png' }
    ]


    return (
        <div className="footer">
            <div className="flogo">
            <img src= "/images/logo1.svg" alt="" />
            </div>
            <div className="link">
               
                <ul>
                    <li><a href="">Terms and Privacy Notice</a></li>
                    <li><a href="">Send us Feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>
                
            </div>
            <div className="social">
             {
                icon.map((x)=>( <img src={x.icons} alt="" />
                    ))
             }
            </div>
            <div className="cp">
                <p>
                    &copy; 12435464,MyLibrary.com, Inc.or its afflicates
                </p>
            </div>
        </div>
    );
}
export default Footer;