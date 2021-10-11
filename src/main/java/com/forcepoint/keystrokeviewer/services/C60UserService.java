package com.forcepoint.keystrokeviewer.services;

import com.forcepoint.keystrokeviewer.domains.C60User;
import com.forcepoint.keystrokeviewer.repositories.C60UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class C60UserService implements UserDetailsService {
    @Autowired
    private C60UserRepository repository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<C60User> user = repository.findByUsername(username);

        if(user.isEmpty()) {
            throw new UsernameNotFoundException(String.format("User %s not found.", username));
        }
        C60User c60 = user.get();
        UserDetails details = new UserDetails() {
            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                return null;
            }

            @Override
            public String getPassword() {
                return c60.getPasswd();
            }

            @Override
            public String getUsername() {
                return c60.getUsername();
            }

            @Override
            public boolean isAccountNonExpired() {
                return !c60.getIsdisabled();
            }

            @Override
            public boolean isAccountNonLocked() {
                return !c60.getIsdisabled();
            }

            @Override
            public boolean isCredentialsNonExpired() {
                return !c60.getIsdisabled();
            }

            @Override
            public boolean isEnabled() {
                return !c60.getIsdisabled();
            }
        };
        return details;
    }
}
