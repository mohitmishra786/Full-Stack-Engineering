# Browsers and How they work

## High Level Job of Web Browser

- Rendering multiple document to display them to us in interactive way.
- Browsers handle network, content, display, data storage, and content security.
- Theier technical requirements are the same as those of AAA games.
- They let web creators building any type of content.

## What every software do

These are those software which do the work of displaying

- browsers reads all the documents.
- turns them into several intermediate representation which are easier to use.
- computes the position of everything on the page.
- paints each pixel accordingly


![image](https://user-images.githubusercontent.com/71754779/138802410-6b672d2b-b1dc-4e24-b864-68c2e4269aee.png)

Actually, every single step could be split up in multiple other steps, but for a good overview of how it all works, that's something we can ignore here. Let's have a look at all four steps.

## Step 1 - URL Gets Resolved

- All the website code in not stored in our local machines and hence needs to be fetched from somewhere else and that place is known as `Server`. Server actually serves some purpose, like for this case, it serves the website.
- You will enter `chessman.com` but actually the server which hosts the source code of that website, is identified via `IP(Internet Protocol)` addresses. The browser sends a `request` (see step 2) to the server with the IP address you entered (indirectly - you of site entered `chessman.com`).
- An IP address typically looks like this: 172.56.180.5 (though there also is a more "modern" form called IPv6 - but let's ignore that for now).

## Step 2 - Request Is Sent

With the IP address resolved, the browser goes ahead and makes a request to the server with that IP address.

"A request" is not just a term. It really is a technical thing that happens behind the scenes.

The browser bundles up a bunch of information (What's the exact URL? Which kind of request should be made? Should metadata be attached) and sends that data package to the IP address.

![image](https://user-images.githubusercontent.com/71754779/138806154-2114625e-485e-4240-8411-4a2fdf4f9da2.png)

The data is sent via the "HyperText Transfer Protocol" (known as `HTTP`) - a standardized protocol which defines what a request (and response) has to look like, which data may be included (and in which form) and how the request will be submitted. You can learn more about HTTP [here](https://github.com/mohitmishra786/Full-Stack-Web-Development/blob/main/Frontend/HTTP.md).

## Step 3 - Response Is Parsed

The browser receives the response sent by the server. This alone, doesn't display anything on the screen though.

Instead, the next step is that the browser parses the response. Just as the server did it with the request. Again, the standardization enforced by HTTP helps of course.

The browser checks the data and metadata that's enclosed in the response. And based on that, it decides what to do.

![image](https://user-images.githubusercontent.com/71754779/138806529-438e6066-65a6-4ec6-9859-6a2a461d90b8.png)

In our case, the response would contain a specific piece of metadata, that tells the browser that the response data is of type `text/html`.This allows the browser to then parse the actual data that's attached to the response as HTML code.

## Step 4 - Page Is Displayed

As mentioned, the browser goes through the HTML data returned by the server and builds a website based on that.

Though it is important to know, that HTML does not include any instructions regarding what the site should look like (i.e. how it should be styled). It really only defines the structure and tells the browser which content is a heading, which content is an image, which content is a paragraph etc. This is especially important for accessibility - screen readers get all the useful information out of the HTML structure.

# Video Explanation

- [Job of Web Browsers](https://www.youtube.com/watch?v=uE3UPEK26U0)
- [Big Picture of How Web Works](https://www.youtube.com/watch?v=hJHvdBlSxug)
