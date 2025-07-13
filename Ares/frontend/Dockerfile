# Use Node.js official image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy everything to the container
COPY . .

# Install dependencies
RUN npm install

# Expose port (matching app.js if using 3000)
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
