#### Source code : <https://github.com/pawankumargali/pypi-cli>

#### Assumptions:

1. In the problem statement input file format, is mentioned as JSON but the example given is in a different format. Therefore, considering the file to be in JSON format

```
{
"Dependencies" : {
    "beautifulsoup4":"4.4.1",    
    "boto":"2.48.0",
    "bz2file":"0.98",
    "certifi":"2017.7.27.1"
 }
}
```
2. Considering creating creation and activation of a virtualenv to hold installed project dependencies to be out of scope of our problem statement.

3. On attempting installation of all packages, if all are successful, only a success message is displayed. If installation attempt for a package fails, we move on to install the next package

4. On finishing installation attempt for all packages, if some packages fail to install, only their names are displayed (error causing installation attempt failure is not displayed )

5. Using Node.js for building the cli-tool and Choosing PIP to install python packages
