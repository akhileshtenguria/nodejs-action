# 1. Use official Node.js image as the base
FROM node:18

# 2. Set working directory in container
WORKDIR /app

# 3. Copy package.json and package-lock.json (for better caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3000

# 7. Command to run the app
CMD ["node", "index.js"]
