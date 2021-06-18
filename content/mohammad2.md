---
title: A1:2017-Injection - Mohammad Page 2
date: 1580577200000
description: Code injection is the exploitation of a computer bug that is caused by processing invalid data. The injection is used by an attacker to introduce (or "inject") code into a vulnerable computer program and change the course of execution. The result of successful code injection can be disastrous, for example, by allowing computer viruses or computer worms to propagate. [Source](https://en.wikipedia.org/wiki/Code_injection)
---

# Injection Attack
### Threat agents
Almost any source of data can be an injection vector, environment variables, parameters, external and internal web services, and all types of users. Injection flaws occur when an attacker can send hostile data to an interpreter.
### Security Weakness
Injection flaws are very prevalent, particularly in legacy code. Injection vulnerabilities are often found in SQL, LDAP, XPath, or NoSQL queries, OS commands, XML parsers, SMTP headers, expression languages, and ORM queries.
Injection flaws are easy to discover when examining code. Scanners and fuzzers can help attackers find injection flaws.
### Impacts
Injection can result in data loss, corruption, or disclosure to unauthorized parties, loss of accountability, or denial of access. Injection can sometimes lead to complete host takeover.
The business impact depends on the needs of the application and data.
### Group "Plain-English" Explanation
An injection attack basically uses a bug in the code to change the way a computer program is meant to be executed. In the world of web development, this is usually carried out by using input fields to send a command to the server and alter the intended functionality of the web page.


Source: [OWASP](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection)