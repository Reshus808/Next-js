import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
import Image from "next/image";

{
    /* <head>
    <style>
    </style>
  </head>; */
}
const Contact = () => {
    return (
        <>
<div className='body-design'>
            <Navbar />
            {/*inline based styling*/}
            {/* <h1 style={{ color: "green" }}>Hello World my contact </h1> */}

            <div className='center'>
            <h1>This is Contact Page</h1>
            <Image src="https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_960_720.jpg" width='500' height='300'></Image>

            </div>

            {/*jsx based styling*/}
            <style jsx>
                {`
                  .body-design {
                    background-color: #6099dc;
                    height: 968px;
                  }

                  .center {
                    text-align: center;
                  }

                  h1 {
                    color: darkgreen;
                  }
                `}
            </style>
    </div>

        </>
    );
};

export default Contact;