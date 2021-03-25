package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
@Service
public class UserServiceImpl
    implements UserService
{

    private List<User> users = new ArrayList<>();


    @Autowired
    public UserServiceImpl()
    {
    }

    @PostConstruct
    private void populateSampleData()
    {
        users.add( new User( "test@mail.com", "password") );
        users.add( new User( "prueba@mail.com", "prueba123") );
        users.add( new User( "prueba2@mail.com", "prueba123") );
        users.add( new User( "prueba3@mail.com", "prueba123") );
    }


    @Override
    public List<User> getUsers()
    {
        return users;
    }

    @Override
    public User getUser( Long id )
    {
        return users.get( 0 );
    }

    @Override
    public User createUser( User user )
    {
        boolean exists = users.stream().anyMatch(userF -> userF.getUsername().equals(user.getUsername()));
        if (!exists){
            users.add(user);
        }
        return user;
    }

    @Override
    public User findUserByEmail( String email )
    {
        System.out.println(email);
        User searchedUser = users.stream()
                .filter(user -> user.getUsername().equals(email.trim().toLowerCase()))
                .findFirst().orElse(null);

        return  searchedUser;
    }

    @Override
    public User findUserByEmailAndPassword( String email, String password )
    {
        return users.get( 0 );
    }

}
