import { Box, Center, Divider, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
 
  
 

const Page = ({profile=[]}) => {
  return (
    <Flex >
    
     
             <Flex w="30%" border={"1px solid red"} >
            <Box p={2} alignItems="center" justifyContent={"center"}  >
                <Center>
                <Image src="https://avatars.githubusercontent.com/u/103638396?v=4" borderRadius={"50%"} w="150px" alt="pro"/>      
 
                </Center>
                <Center>
                    <Text>Md Yajul Ansari</Text>
                </Center>
               <Center>
                 <Text>@mdyajul</Text>
               </Center>
               <Center>
                <Box w={"100%"}  >
                   
                    <Text>Full-stack Developer </Text>
                    
                    <Text>JavaScript  </Text>
                  
                    <Text>Typescript </Text>
                   
                    <Text>NodeJS </Text>
                   
                    <Text>ReactJS </Text>
                     
                    <Text>HTML </Text>
                    
                         <Text>CSS  </Text>
                    
                    <Text>Chakra-UI </Text>                   
                
                </Box>
                
               </Center>
               </Box>          
        </Flex>
        <Box w="100%" p={2} border={"1px solid red"}>
            <Center>
                <Heading >Projects</Heading>
            </Center>
           
        <Grid    gridTemplateColumns="repeat(2, 1fr)" gap={2} >
        
        {
        profile.map((pro) => (

            <GridItem key={pro.id}>
               
                <Box>
                 <Text>{pro.name}</Text>
                 <Text>{pro.full_name}</Text>
                 <Flex>
                    <Text>{pro.html_url.forks_count}</Text>
                    <Text>0</Text>


                 </Flex>

                </Box>
                  
            </GridItem>
        
        ))
       }
      
       
      
    </Grid>  
        </Box>
       
     
  
    </Flex>
   
  )
}

export async function getServerSideProps() {
    let response = await fetch("http://localhost:8080/items")
    let data= await response.json()

    return {
        props: {
            profile: data,
        }
    }
}



export default Page