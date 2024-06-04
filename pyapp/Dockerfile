# Use the official Python image as a base image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install project dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project directory into the container
COPY . .

# Expose port 80
EXPOSE 80

# Command to run the Gunicorn server
CMD ["gunicorn", "-b", "0.0.0.0:80", "app:app"]
