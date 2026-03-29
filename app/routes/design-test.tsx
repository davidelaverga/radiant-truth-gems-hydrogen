import {useState} from 'react';
import {Button} from '~/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '~/components/ui/card';
import {Input} from '~/components/ui/input';
import {Label} from '~/components/ui/label';
import {Separator} from '~/components/ui/separator';
import {Badge} from '~/components/ui/badge';
import {Checkbox} from '~/components/ui/checkbox';
import {Switch} from '~/components/ui/switch';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip';
import {Skeleton} from '~/components/ui/skeleton';
import {Textarea} from '~/components/ui/textarea';
import {Progress} from '~/components/ui/progress';
import {Slider} from '~/components/ui/slider';
import {RadioGroup, RadioGroupItem} from '~/components/ui/radio-group';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import {ScrollArea} from '~/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';

export default function DesignTest() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [progress, setProgress] = useState(65);

  return (
    <TooltipProvider>
      <div className="container-wide py-16">
        {/* ===== SECTION 1: Typography ===== */}
        <section className="mb-16">
          <h1 className="text-5xl mb-4">Typography — Cormorant Garamond</h1>
          <Separator className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl mb-2">H2 Serif Heading</h2>
              <h3 className="text-3xl mb-2">H3 Serif Heading</h3>
              <h4 className="text-2xl mb-2">H4 Serif Heading</h4>
              <h5 className="text-xl mb-2">H5 Serif Heading</h5>
              <h6 className="text-lg mb-2">H6 Serif Heading</h6>
            </div>
            <div>
              <p className="body-refined mb-4">
                Body text in Inter — refined, light, and elegant. This is the
                body-refined class with muted foreground color and generous line
                height for luxury readability.
              </p>
              <p className="serif-italic text-2xl mb-4">
                Serif italic — Cormorant Garamond italic
              </p>
              <p className="caps-label mb-4">
                Caps Label — Uppercase Tracking
              </p>
              <p className="serif-heading text-3xl">
                Serif Heading utility class
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Colors & Theme ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Colors & Design Tokens</h2>
          <Separator className="mb-8" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-primary rounded" />
              <span className="text-xs">Primary (Gold)</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-secondary rounded" />
              <span className="text-xs">Secondary</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-muted rounded" />
              <span className="text-xs">Muted</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-accent rounded" />
              <span className="text-xs">Accent</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-destructive rounded" />
              <span className="text-xs">Destructive</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-foreground rounded" />
              <span className="text-xs">Foreground</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-gold rounded" />
              <span className="text-xs">Gold</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-gold-light rounded" />
              <span className="text-xs">Gold Light</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-gold-dark rounded" />
              <span className="text-xs">Gold Dark</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-ivory border border-border rounded" />
              <span className="text-xs">Ivory</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-card border border-border rounded" />
              <span className="text-xs">Card</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-full bg-background border border-border rounded" />
              <span className="text-xs">Background</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="divider-soft mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              Divider soft (above)
            </p>
            <div className="divider-gold mb-4" />
            <p className="text-sm text-muted-foreground">Divider gold (above)</p>
          </div>
        </section>

        {/* ===== SECTION 3: Buttons ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Buttons</h2>
          <Separator className="mb-8" />

          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-3">shadcn/ui Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">I</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3">Custom Dawn Buttons (CSS classes)</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-dawn">Dawn Outline</button>
                <button className="btn-dawn-filled">Dawn Filled</button>
                <button className="btn-dawn-accent">Dawn Accent</button>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3">Legacy Aliases</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-premium">Premium</button>
                <button className="btn-premium-filled">Premium Filled</button>
                <button className="btn-premium-gold">Premium Gold</button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: Cards ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Cards</h2>
          <Separator className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>
                  A basic card with header and content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card content goes here with muted foreground text.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <div className="card-elevated p-6">
              <h3 className="text-xl mb-2">Elevated Card</h3>
              <p className="text-sm text-muted-foreground">
                Uses the card-elevated utility class
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Product Card</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/hero-dawn.jpg"
                  alt="Hero"
                  className="w-full h-40 object-cover mb-4"
                />
                <div className="flex gap-2">
                  <Badge>New</Badge>
                  <Badge variant="secondary">Lab Diamond</Badge>
                  <Badge variant="outline">14K</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ===== SECTION 5: Form Elements ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Form Elements</h2>
          <Separator className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label>Metal Type</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select metal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yellow-gold">Yellow Gold</SelectItem>
                    <SelectItem value="white-gold">White Gold</SelectItem>
                    <SelectItem value="rose-gold">Rose Gold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Email notifications</Label>
              </div>

              <div>
                <Label>Purity</Label>
                <RadioGroup defaultValue="14k" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="14k" id="14k" />
                    <Label htmlFor="14k">14K Gold</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="18k" id="18k" />
                    <Label htmlFor="18k">18K Gold</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: Tabs ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Tabs</h2>
          <Separator className="mb-8" />

          <Tabs defaultValue="details" className="max-w-xl">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="returns">Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="p-4">
              <p className="text-sm text-muted-foreground">
                Handcrafted with lab-grown diamonds set in 14K or 18K gold.
              </p>
            </TabsContent>
            <TabsContent value="shipping" className="p-4">
              <p className="text-sm text-muted-foreground">
                Free insured shipping worldwide. Delivery in 5-7 business days.
              </p>
            </TabsContent>
            <TabsContent value="returns" className="p-4">
              <p className="text-sm text-muted-foreground">
                30-day hassle-free returns with full refund.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        {/* ===== SECTION 7: Accordion ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Accordion</h2>
          <Separator className="mb-8" />

          <Accordion type="single" collapsible className="max-w-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are lab-grown diamonds?</AccordionTrigger>
              <AccordionContent>
                Lab-grown diamonds are real diamonds created in controlled
                environments. They have the same physical, chemical, and optical
                properties as mined diamonds.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer customization?</AccordionTrigger>
              <AccordionContent>
                Yes! Our signature collection allows you to choose carat weight,
                metal type, diamond shape, and ring size.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy on all items. Items must be
                returned in their original condition.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ===== SECTION 8: Dialog, Sheet, AlertDialog ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Overlays (Dialog, Sheet, Alert)</h2>
          <Separator className="mb-8" />

          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Size Guide</DialogTitle>
                  <DialogDescription>
                    Find your perfect ring size with our measurement guide.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    Use a piece of string to measure around your finger, then
                    compare to our size chart.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    Review your items before checkout.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    Your cart is empty. Start shopping to add items.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Item</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Remove from cart?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will remove the item from your shopping cart.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Remove</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Hover for Tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </section>

        {/* ===== SECTION 9: Progress, Slider, Skeleton ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Progress, Slider, Skeleton</h2>
          <Separator className="mb-8" />

          <div className="max-w-md space-y-8">
            <div>
              <Label className="mb-2 block">Progress ({progress}%)</Label>
              <Progress value={progress} />
            </div>
            <div>
              <Label className="mb-2 block">Slider</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div>
              <Label className="mb-2 block">Skeleton Loading</Label>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 10: Table ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Table</h2>
          <Separator className="mb-8" />

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Metal</TableHead>
                <TableHead>Carat</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Classic Solitaire Ring</TableCell>
                <TableCell>14K Yellow Gold</TableCell>
                <TableCell>1.0 ct</TableCell>
                <TableCell className="text-right">$1,295</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Diamond Stud Earrings</TableCell>
                <TableCell>14K White Gold</TableCell>
                <TableCell>2.0 ct</TableCell>
                <TableCell className="text-right">$2,195</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tennis Bracelet</TableCell>
                <TableCell>18K Rose Gold</TableCell>
                <TableCell>5.0 ct</TableCell>
                <TableCell className="text-right">$4,850</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* ===== SECTION 11: Layout Utilities ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Layout & Spacing</h2>
          <Separator className="mb-8" />

          <div className="bg-muted p-4 mb-4">
            <p className="text-sm">
              This page uses <code>container-wide</code> class (max-w-[1320px])
            </p>
          </div>

          <div className="section-dawn-sm bg-ivory">
            <p className="text-center text-muted-foreground">
              section-dawn-sm spacing (py-24 md:py-28) with ivory background
            </p>
          </div>
        </section>

        {/* ===== SECTION 12: Asset Test ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Asset Loading Test</h2>
          <Separator className="mb-8" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <img
                src="/hero-dawn.jpg"
                alt="Hero Dawn"
                className="w-full h-32 object-cover"
              />
              <p className="text-xs mt-1 text-muted-foreground">hero-dawn.jpg</p>
            </div>
            <div>
              <img
                src="/product-ring.jpg"
                alt="Product Ring"
                className="w-full h-32 object-cover"
              />
              <p className="text-xs mt-1 text-muted-foreground">
                product-ring.jpg
              </p>
            </div>
            <div>
              <img
                src="/category-earrings.jpg"
                alt="Category Earrings"
                className="w-full h-32 object-cover"
              />
              <p className="text-xs mt-1 text-muted-foreground">
                category-earrings.jpg
              </p>
            </div>
            <div>
              <img
                src="/signature-solitaire-ring.jpg"
                alt="Signature Solitaire"
                className="w-full h-32 object-cover"
              />
              <p className="text-xs mt-1 text-muted-foreground">
                signature-solitaire-ring.jpg
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 13: Scroll Area ===== */}
        <section className="mb-16">
          <h2 className="text-4xl mb-4">Scroll Area</h2>
          <Separator className="mb-8" />

          <ScrollArea className="h-[200px] w-full max-w-md rounded-md border p-4">
            {Array.from({length: 20}, (_, i) => (
              <div key={i} className="py-2 border-b border-border/40 last:border-0">
                <p className="text-sm">
                  Scroll item {i + 1} — Lab Diamond Collection
                </p>
              </div>
            ))}
          </ScrollArea>
        </section>
      </div>
    </TooltipProvider>
  );
}
