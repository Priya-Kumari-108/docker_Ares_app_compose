from node:16-alpine
workdir /app
add . .
ENTRYPOINT ["node"]
CMD ["app.js"]