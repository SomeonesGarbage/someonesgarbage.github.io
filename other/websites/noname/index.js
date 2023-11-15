function copyMiiData() {
    navigator.clipboard
        .writeText("AwAAQEp1suGiJbAC3DXFNXg5ODM4EQAAomNOAG8AUABuAGkAZAAAAAAAAAAAAGIqAJBCARFoRBgpFEYUgRIXaA0AACkAUkhUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPfy")
        .then(() => {
            alert("I stole this website, and his mii! (his mii has been copied to your clipboard :)")
        })
        .catch(() => {
            alert("FUCK (i mean oops). (go to the og website cause a error occured)")
        })
    
}

async function CreateNav() {
    var navFetch = await (await (await fetch("nav.html")).blob()).text()
    var body = $("body")

    body.prepend(navFetch)
}

async function CreateBlog() {
    var blogFetch = JSON.parse(await (await (await fetch("https://nonamegiven.xyz/blog.json")).blob()).text())
    var templateBlog = await (await (await (await fetch("https://nonamegiven.xyz/blog_template.html")).blob()).text())

    for (let i = 0; i < blogFetch.length; i++) {
        const blog_post = blogFetch[i];
        var blog_html = new String(templateBlog)

        console.log("Prepending " + blog_post.title + " to current HTML.")

        console.log(blog_html.includes("[title]"))

        blog_html = blog_html.replace('[title]', blog_post.title)
        blog_html.replace("[date]", blog_post.date)
        blog_html.replace("[description]", blog_post.description)
        blog_html.replace("[body]", blog_post.body)

        $(".blog_holder").append(blog_html)

        console.log(blog_post)
    }

    console.log("Finished prepending all blog posts.")
}