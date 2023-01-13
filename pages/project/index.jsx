import { Box, Flex, Grid, GridItem, Text  } from '@chakra-ui/react'
import React from 'react'

const Page = ({profile=[]}) => {
  return (
    <div>
                <Grid    gridTemplateColumns="repeat(2, 1fr)" gap={2} >
        
        {
        profile.map((pro) => (

            <GridItem key={pro.id}>
               
                <Box>
                 <Text>{pro.name}</Text>
                 <Text>{pro.full_name}</Text>
                 <Flex>
                    <Text>{pro.node_id}</Text>
                    <Text>0</Text>


                 </Flex>

                </Box>
                  
            </GridItem>
        
        ))
       }
      
       
      
    </Grid>  
    </div>
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