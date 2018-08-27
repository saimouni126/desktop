package com.mypackage;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;


public class DemoOne {


	public static void main(String[] args) {
		String s = "afsg,jkj,ugyig";
		Map<Character,Integer> map =new HashMap<Character,Integer>();
        for(int i=0; i< s.length();i++){
        	Character ch = s.charAt(i);
        	Integer value = map.get(i);
        	if(value !=null) {
        		map.put(ch,value+ 1);
        		
        	}
        	else{
        		map.put(ch, 1);
        		
        	}
        }
        Set<Character> set = map.keySet();
        Iterator<Character> it = set.iterator();
        while(it.hasNext()) {
        	Character k = it.next();
        	Integer v = map.get(k);
        	System.out.println("the character " + k + " the count is"+ v);
        }
	}

}
