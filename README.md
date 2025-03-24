I am creating a directory outside of the project, let's call it `vendors` and creating a symlink from `app/vendor` to one of these vendors in this external directory. However, when navigating to a page.tsx inside one of these directories it just results in 404 being shown in the browser.

I've tried to trace the code and it seems to be resolving the symlinks correctly in the `next\dist\lib\recursive-readdir.js` file inside the `recursiveReadDir` function. When testing whether a link is a directory or a pathname it correctly (seemingly) ends up in the directories array.

![image](https://github.com/user-attachments/assets/bd5c72d1-e491-44df-a4dd-c8c7d564487b)

I've created a minimal reproduction of the issue and linked the repo to this discussion. 

**Steps to reproduce:**

1. Clone the repo attached
2. `npm i`
3. Navigate to `src\apps` in the command line
4. Create a symlink in Windows by running `mklink /D vendor ..\..\vendors\test-vendor-1` or in Unix with `ln -s ../../vendors/test-vendor-1 vendor`
5. `npm run dev`
6. Navigate to http://localhost:3000/vendor/posts

Observe the following:

![image](https://github.com/user-attachments/assets/c19149f4-57f3-49d0-8ef2-f940943976ec)

If you remove the symlink and paste the vendor files directly into the `app/vendor` folder you observe:

![image](https://github.com/user-attachments/assets/b56c3010-1a53-4b0c-84a0-ff601816ca7a)

[Link to repo with reproduction.](https://github.com/snivels/symlinks-not-working)



