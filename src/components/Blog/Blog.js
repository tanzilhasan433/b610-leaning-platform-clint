import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <br />
            <h1 className='text-center text-primary'>Blog</h1>
            <br />
            <br />

                        <div class="container overflow-hidden text-center">
                           <div class="row gy-5">
                                    <div class="col-6">
                                            <div class="p-3 border bg-light">
                                            <h4>what is cors? What other options do you have to implement core?</h4>
                                            <p>CORS  is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources. and read to see  more next </p>
                   
                                            </div>
                                    </div>
                                    <div class="col-6">
                                            <div class="p-3 border bg-light">
                                            <h4>Why are you using firebase? implement authentication?</h4>
                                            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
               
                                            </div>
                                        </div>
                                    <div class="col-6">
                                            <div class="p-3 border bg-light">
                                            <h4>How does the private route work?</h4>
                                            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
               
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="p-3 border bg-light">
                                            <h4>What is Node? How does Node work?</h4>
                                            <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                
                                            </div>
                                        </div>
                           </div>
                     </div>
                     <br />
                     <br />

         
            
        </div>
    );
};

export default Blog;