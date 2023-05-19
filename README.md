# Photo Portfolio Front End
Client for my photo portfolio web application, built with React and TypeScript.
Axios is used to make http requests to the backend of the application. The application served
by Nginx on an EC2 instance. On this EC2 instance Nginx is configured to make requests to another EC2 instance
where the back-end is hosted. I describe the process of configuring Nginx <a href="https://github.com/RyanReedKnight/Notes-and-instructions/blob/main/Nginx/Configuring-Two-EC2-Instances-with-Nginx.md">here</a>. To build
the application in preparation for deployment, it is necisary to create a .env file in the root directory,
and assign VITE_BACKEND_URL the value of the endpoint Axios will make calls to. At least for this set-up,
it is best to make that endpoint the server the webage is being served from, and then to configure 
Nginx to pass on these calls to the back-end, this is described in greater detail in the link where I discuss
the Nginx configuration.

# Links
  * <a href="http://ryan-knights-photo-website.com">The deployed website.</a>
  * <a href="https://github.com/RyanReedKnight/PortfolioBackend" target="_blank">Backend repository</a>
