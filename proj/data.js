var widgetCreated = false;
createWidget();

document.onreadystatechange= function () {
    createWidget();
};

function createWidget() {
    if (document.readyState == 'complete' && !widgetCreated)
    {
        widgetCallback(
            {
                mainImage: {
                    srcUrl:  "https://www.thestar.com/content/dam/thestar/business/2017/02/27/warren-buffett-goes-long-on-apple-stock/apple.jpg.size.custom.crop.1086x726.jpg",
                    txt: "Billionaires Love These 5 Stocks",
                    duration: "5:34"
                },
                images: [
                    {
                        srcUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2pK_GKT6LPadU-YtTHDw3RFRitPbtXS6aVoqeLeIP1b7FA5F",
                        txt: "The \"Bug-A-Salt\" is OneArtist's Answer To Pesky Bugs",
                        duration: "04:19"
                    },
                    {
                        srcUrl:"http://i2.cdn.turner.com/money/dam/assets/121011021256-coca-cola-hellenic-tablet-large.jpg",
                        txt: "Coca-Cola Gives Greece a Massive Blow",
                        duration: "03:48"
                    },
                    {
                        srcUrl:"http://apjjf.org/data/338.JPG",
                        txt: "Norodom Sihanouk, Cambodian King, Left Mixed Legacy",
                        duration: "04:52"
                    },
                    {
                        srcUrl:"http://a.scpr.org/i/8d1545101aff663eadb7fedae775a759/49402-full.jpg",
                        txt: "Debate's Town Hall Format to Challenge Obama; Consumers Share Their Point of View in case",
                        duration: "16:49"
                    }

                    //cambodia flag: "http://cambodiaflag.facts.co/FlagofCambodia1975-1976.jpg"
                ]
            });
        widgetCreated = true;
    }
}
