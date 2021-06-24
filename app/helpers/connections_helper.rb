module ConnectionsHelper

    def degrees_of_separation (node, endNode, edges)

      if edges.length < 1
        puts "edges length is #{edges.length}"
        return
      end

        #recursive function, only define values on first iteration
        if !defined?(@queue)
          @queue = []
          @queue.push([node,0])
          @degrees = 0
          @checked = []
          @unchecked = edges
        end
    
        # iterate through all edges
      
        @unchecked.each do |current|
      
          @currentNode = @queue[0][0]
          @step = @queue[0][1]
      
          if @currentNode == endNode
            puts "Last node is #{@currentNode} which is #{@step} steps aways"
            return
          end
      
          # puts current
          if current[0] == @currentNode
            @queue.push([current[1], @step+= 1])
          elsif current[1] == @currentNode
            @queue.push([current[0], @step+= 1])
          else
            @checked.push(current)
          end
          
        end
      
        # puts "Hi #{@queue}"
        if @step == 5
          puts "Cycle Ended"
          puts @currentNode
          return @currentNode
        end
        # puts @queue
        @queue.shift
      
        degrees_of_separation(node, endNode, edges)
      
      end      
end
