## RTMP :: Nodejs

### Dependencies
```bash
cd backend; npm install;
```

### Run
* Backend:
  ```bash
  cd backend;
  npm start;
  # or 
  node ./src/rtmp_server.js
  ```
* Frontend:
  ```bash
  cd frontend
  npm i http-server
  http-server . -p 8080
  ```

### Obs-Studio
Service : Custom   
Server : rtmp://localhost/live   
Stream Key : `stream name`   
