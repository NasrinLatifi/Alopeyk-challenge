module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          loader: "css-loader",
          options: {
            import: {
              filter: (url, media, resourcePath) => {
                // resourcePath - path to css file
  
                // Don't handle `style.css` import
                if (url.includes("style.css")) {
                  return false;
                }
  
                return true;
              },
            },
          },
        },
      ],
    },
  };