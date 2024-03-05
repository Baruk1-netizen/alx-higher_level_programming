# Project: 0x10 Python - Network #0

## Description

This project consists of several tasks aimed at familiarizing you with using cURL and understanding various aspects of HTTP and network communication. You'll be writing Bash scripts and Python scripts to perform different HTTP requests, handle responses, and interact with web servers.

## Learning Objectives

Upon completion of this project, I should be able to:

- Understand the fundamentals of HTTP (HyperText Transfer Protocol).
- Execute HTTP requests using cURL.
- Handle HTTP responses in Bash and Python scripts.
- Work with URL components such as scheme, domain, port, query string, etc.
- Understand HTTP request methods and response status codes.
- Utilize HTTP headers including custom headers and cookies.

## Quiz Questions

To reinforce my understanding of the concepts covered in this project, there's a quiz included. The quiz covers various topics related to HTTP, URLs, cURL, request methods, response status codes, headers, and cookies.

## Tasks

1. **0-body_size.sh**: Write a Bash script that retrieves the size of the body of a response from a given URL using cURL.
2. **1-body.sh**: Write a Bash script that retrieves and displays the body of the response from a given URL using cURL, displaying only the body for a response with a status code of 200.
3. **2-delete.sh**: Write a Bash script that sends a DELETE request to a given URL using cURL and displays the body of the response.
4. **3-methods.sh**: Write a Bash script that retrieves and displays all HTTP methods the server will accept for a given URL using cURL.
5. **4-header.sh**: Write a Bash script that retrieves the body of a response from a given URL using cURL, including a custom header `X-School-User-Id` with a value of `98`.
6. **5-post_params.sh**: Write a Bash script that sends a POST request to a given URL with specified parameters using cURL, and displays the body of the response.
7. **6-peak.py, 6-peak.txt**: Write a Python function `find_peak` that finds a peak in an unsorted list of integers with optimized complexity. Also, provide a text file (`6-peak.txt`) containing the complexity of the algorithm.
8. **100-status_code.sh**: Write a Bash script that sends a request to a given URL using cURL and displays only the status code of the response.
9. **101-post_json.sh**: Write a Bash script that sends a JSON POST request to a given URL with the contents of a specified file in the body, using cURL.
10. **102-catch_me.sh**: Write a Bash script that makes a request to a specific URL causing the server to respond with a message containing "You got me!" in the body of the response, using cURL.

## Repository

All your scripts and files should be stored in the [alx-higher_level_programming](https://github.com/waltertaya/alx-higher_level_programming) repository, specifically in the `0x10-python-network_0` directory.

## Usage

All Bash scripts should be executable and run on Ubuntu 20.04 LTS. Python scripts should be run using Python 3.8.5.

For example:

```Bash
./0-body_size.sh 0.0.0.0:5000
./1-body.sh 0.0.0.0:5000/route_1
./2-delete.sh 0.0.0.0:5000/route_3
./3-methods.sh 0.0.0.0:5000/route_4
./4-header.sh 0.0.0.0:5000/route_5
./5-post_params.sh 0.0.0.0:5000/route_6
python3 6-main.py
./100-status_code.sh 0.0.0.0:5000
./101-post_json.sh 0.0.0.0:5000/route_json my_json_0
./102-catch_me.sh
```

## Testing

I made sure that I test my scripts thoroughly, especially against the provided sandbox environment. The web server in the sandbox is running on port 5000.

## Restrictions

- All Bash scripts should be exactly 3 lines long.
- Use `curl` for making HTTP requests in Bash scripts.
- Avoid using `echo`, `cat`, etc., for displaying outputs.
- Ensure all files have the necessary permissions and end with a newline.

Remember to document the Python functions, modules, and classes according to the specified requirements.

## Deadline

This project must be completed no later than Mar 1, 2024, 6:00 AM.
