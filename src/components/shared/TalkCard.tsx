import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation, Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TalkCardProps {
  title: string;
  event: string;
  date: string;
  location: string;
  attendees?: number;
  description: string;
  topics: string[];
  attendeesLabel: string;
}

export const TalkCard = ({
  title,
  event,
  date,
  location,
  attendees,
  description,
  topics,
  attendeesLabel,
}: TalkCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="flex items-start gap-3 text-xl md:text-2xl mb-2">
              <Presentation className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span>{title}</span>
            </CardTitle>
            <p className="text-base font-semibold text-accent">{event}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {location}
            </div>
            {attendees && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {attendees} {attendeesLabel}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
