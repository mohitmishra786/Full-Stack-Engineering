# HTTP

[HTTP Video Explanation](https://www.youtube.com/watch?v=LZJNj-HHfII&t=59s)

# Status Codes

* `1XX` - Information
* `2XX` - Sucess
* `3XX` - Redirect
* `4XX` - Client Erros (like `404 NOT FOUND`)
* `5XX` - Server Error (like `503 Server Not Available`

## Firstly, know that:
- URLs are a type of URI
- URNs are a type of URI
- URCs are a type of URI
- etc..

---
## URI 
 - a standard for identifying documents using a short string of numbers, 
letters, and symbols.
 - defined by https://datatracker.ietf.org/doc/html/rfc3986
 
Examples:
  - URLs
  - URNs
  - URCs
  - ...
 
--- 
## URL
 - Contains information about how to fetch a resource from its location.
 - Always start with the protocol
 - Can be relative

Examples:
 - http://example.com/mypage.html
 - file:///home/user/file.txt
 - tel:1-888-555-5555
 
--- 
## URN
 - Identifies a resource by a unique and persistent name, but doesn't necessarily tell you how to locate it on the internet. 
 - It usually starts with the prefix urn:

Examples:
 - urn:isbn:0451450523 to identify a book by its ISBN number.
 - urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66 a globally unique identifier
 
--- 
## URC
 - Points to meta data about a document rather than to the document itself. 
An example of a URC is one that points to the HTML source code of a page

Examples:
 - like: view-source:http://example.com/