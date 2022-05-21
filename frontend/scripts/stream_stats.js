/*
    Source: https://www.npmjs.com/package/node-media-server
    Example by github.com/tahadostifam
*/

new Vue({
    el: "#app",
    data() {
        return {
            loading: true,
            errorOccurred: false,
            streamsList: null,
        };
    },
    mounted() {
        this.fetchStreamsList()
        setInterval(() => {
            this.fetchStreamsList()
        }, 1500);
    },
    methods: {
        fetchStreamsList() {
            axios.get("http://localhost:8000/api/streams").then((response) => {
                if (response.data.live) {
                    this.streamsList = []
                    for (const [_, value] of Object.entries(response.data.live)) {
                        this.streamsList.push(value)
                    }
                } else {
                    this.streamsList = null
                }
            }).catch((error) => {
                console.error(error);
                this.errorOccurred = true
            }).finally(() => {
                this.loading = false
            })
        },
    },
});

// fission: {
//     ffmpeg: '/usr/local/bin/ffmpeg',
//     tasks: [
//       {
//         rule: "game/*",
//         model: [
//           {
//             ab: "128k",
//             vb: "1500k",
//             vs: "1280x720",
//             vf: "30",
//           },
//           {
//             ab: "96k",
//             vb: "1000k",
//             vs: "854x480",
//             vf: "24",
//           },
//           {
//             ab: "96k",
//             vb: "600k",
//             vs: "640x360",
//             vf: "20",
//           },
//         ]
//       },
//       {
//         rule: "show/*",
//         model: [
//           {
//             ab: "128k",
//             vb: "1500k",
//             vs: "720x1280",
//             vf: "30",
//           },
//           {
//             ab: "96k",
//             vb: "1000k",
//             vs: "480x854",
//             vf: "24",
//           },
//           {
//             ab: "64k",
//             vb: "600k",
//             vs: "360x640",
//             vf: "20",
//           },
//         ]
//       },
//     ]
// }