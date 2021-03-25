package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Task;
import com.google.gson.Gson;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping( "api" )
@CrossOrigin(origins = "*")
public class TaskController {

    @GetMapping
    public ResponseEntity<Object> getTasks() throws IOException {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet request = new HttpGet("https://kc0ncz6pih.execute-api.us-east-1.amazonaws.com/production/api/tasks");
        CloseableHttpResponse response = httpClient.execute(request);
        HttpEntity entity = response.getEntity();
        String result = EntityUtils.toString(entity);

        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @PostMapping
    public ResponseEntity<Object> addTask(@RequestBody Task task) throws UnsupportedEncodingException {
        String result;
        HttpPost request = new HttpPost("https://kc0ncz6pih.execute-api.us-east-1.amazonaws.com/production/api/tasks");
        Gson gson = new Gson();
        ResponseEntity<Object> bodyResponse;
        request.setEntity(new StringEntity(gson.toJson(task)));
        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(request)) {
             result = EntityUtils.toString(response.getEntity());
             bodyResponse = new ResponseEntity<>(result,HttpStatus.OK);
        } catch (IOException e) {
            bodyResponse = new ResponseEntity<>("Something was wrong", HttpStatus.BAD_REQUEST);
        }

        return bodyResponse;
    }
}
